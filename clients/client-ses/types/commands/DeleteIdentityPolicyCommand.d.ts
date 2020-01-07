import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DeleteIdentityPolicyRequest, DeleteIdentityPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteIdentityPolicyCommandInput = DeleteIdentityPolicyRequest;
export declare type DeleteIdentityPolicyCommandOutput = DeleteIdentityPolicyResponse & __MetadataBearer;
export declare class DeleteIdentityPolicyCommand extends $Command<DeleteIdentityPolicyCommandInput, DeleteIdentityPolicyCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteIdentityPolicyCommandInput;
    constructor(input: DeleteIdentityPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIdentityPolicyCommandInput, DeleteIdentityPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
