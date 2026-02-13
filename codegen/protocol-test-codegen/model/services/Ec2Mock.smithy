$version: "2.0"

namespace awssdkjs.example

use aws.auth#sigv4
use aws.protocols#ec2Query

@sigv4(name: "ec2")
@ec2Query
@xmlNamespace(uri: "https://awssdkjs.example")
service Ec2Mock {
    version: "2024-01-01"
    operations: [
        PutEc2Alias
    ]
}
