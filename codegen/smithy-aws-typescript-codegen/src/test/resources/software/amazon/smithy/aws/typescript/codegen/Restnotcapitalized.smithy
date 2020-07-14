namespace smithy.example

use aws.protocols#restJson1

@aws.api#service(sdkId: "Rest not capitalized")
@restJson1
service OriginalName {
    version: "2019-10-15",
}
