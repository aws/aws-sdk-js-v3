namespace smithy.example

use aws.protocols#restJson1

@aws.api#service(sdkId: "notCapitalized")
@restJson1
service OriginalName {
    version: "2019-10-15",
}
