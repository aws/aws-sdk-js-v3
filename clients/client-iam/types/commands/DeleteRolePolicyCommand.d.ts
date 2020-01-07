import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteRolePolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRolePolicyCommandInput = DeleteRolePolicyRequest;
export declare type DeleteRolePolicyCommandOutput = __MetadataBearer;
export declare class DeleteRolePolicyCommand extends $Command<DeleteRolePolicyCommandInput, DeleteRolePolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteRolePolicyCommandInput;
    constructor(input: DeleteRolePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRolePolicyCommandInput, DeleteRolePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
