import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { UnlinkIdentityInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UnlinkIdentityCommandInput = UnlinkIdentityInput;
export declare type UnlinkIdentityCommandOutput = __MetadataBearer;
export declare class UnlinkIdentityCommand extends $Command<UnlinkIdentityCommandInput, UnlinkIdentityCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: UnlinkIdentityCommandInput;
    constructor(input: UnlinkIdentityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnlinkIdentityCommandInput, UnlinkIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
