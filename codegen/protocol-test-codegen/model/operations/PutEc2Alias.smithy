$version: "2.0"

namespace awssdkjs.example

use aws.protocols#ec2Query
use aws.protocols#ec2QueryName
use smithy.test#httpRequestTests

@httpRequestTests([
    {
        id: "Ec2QueryNameSerializationRequest"
        documentation: """
            Serialization should be the ec2QueryName trait first,
            then the capitalized xmlName, and then the member name.
            """
        protocol: ec2Query
        uri: "/"
        params: {
            alias: { ec2MemberNameWithAliases: "A", ec2MemberNameWithOnlyXmlAlias: "B", ec2MemberNameWithOnlyEc2Alias: "C", ec2MemberNameWithNoAlias: "D" }
        }
        method: "POST"
        body: "Action=PutEc2Alias&Version=2024-01-01&Alias.ec2QueryMemberNameWithAliases=A&Alias.Ec2XmlMemberNameWithOnlyXmlAlias=B&Alias.ec2QueryMemberNameWithOnlyEc2Alias=C&Alias.Ec2MemberNameWithNoAlias=D"
    }
])
operation PutEc2Alias {
    input: PutEc2AliasRequest
}

@input
structure PutEc2AliasRequest {
    alias: Ec2Alias
}

@documentation(
    """
    This structure tests serialization of the ec2QueryName trait.
    See https://smithy.io/2.0/aws/protocols/aws-ec2-query-protocol.html#aws-protocols-ec2queryname-trait
    for behavior.
    """
)
structure Ec2Alias {
    @ec2QueryName("ec2QueryMemberNameWithAliases")
    @xmlName("ec2XmlMemberNameWithAliases")
    ec2MemberNameWithAliases: String

    @xmlName("ec2XmlMemberNameWithOnlyXmlAlias")
    ec2MemberNameWithOnlyXmlAlias: String

    @ec2QueryName("ec2QueryMemberNameWithOnlyEc2Alias")
    ec2MemberNameWithOnlyEc2Alias: String

    ec2MemberNameWithNoAlias: String
}
