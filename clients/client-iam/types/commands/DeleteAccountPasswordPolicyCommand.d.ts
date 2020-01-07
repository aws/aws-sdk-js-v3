import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAccountPasswordPolicyCommandInput = {};
export declare type DeleteAccountPasswordPolicyCommandOutput = __MetadataBearer;
export declare class DeleteAccountPasswordPolicyCommand extends $Command<DeleteAccountPasswordPolicyCommandInput, DeleteAccountPasswordPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteAccountPasswordPolicyCommandInput;
    constructor(input: DeleteAccountPasswordPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAccountPasswordPolicyCommandInput, DeleteAccountPasswordPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
