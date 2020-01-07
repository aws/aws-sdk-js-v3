import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { UnlinkDeveloperIdentityInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UnlinkDeveloperIdentityCommandInput = UnlinkDeveloperIdentityInput;
export declare type UnlinkDeveloperIdentityCommandOutput = __MetadataBearer;
export declare class UnlinkDeveloperIdentityCommand extends $Command<UnlinkDeveloperIdentityCommandInput, UnlinkDeveloperIdentityCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: UnlinkDeveloperIdentityCommandInput;
    constructor(input: UnlinkDeveloperIdentityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnlinkDeveloperIdentityCommandInput, UnlinkDeveloperIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
