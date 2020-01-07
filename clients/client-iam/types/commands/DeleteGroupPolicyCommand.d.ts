import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteGroupPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteGroupPolicyCommandInput = DeleteGroupPolicyRequest;
export declare type DeleteGroupPolicyCommandOutput = __MetadataBearer;
export declare class DeleteGroupPolicyCommand extends $Command<DeleteGroupPolicyCommandInput, DeleteGroupPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteGroupPolicyCommandInput;
    constructor(input: DeleteGroupPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGroupPolicyCommandInput, DeleteGroupPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
