import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteUserPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteUserPolicyCommandInput = DeleteUserPolicyRequest;
export declare type DeleteUserPolicyCommandOutput = __MetadataBearer;
export declare class DeleteUserPolicyCommand extends $Command<DeleteUserPolicyCommandInput, DeleteUserPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteUserPolicyCommandInput;
    constructor(input: DeleteUserPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserPolicyCommandInput, DeleteUserPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
