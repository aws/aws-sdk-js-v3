import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateAssumeRolePolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAssumeRolePolicyCommandInput = UpdateAssumeRolePolicyRequest;
export declare type UpdateAssumeRolePolicyCommandOutput = __MetadataBearer;
export declare class UpdateAssumeRolePolicyCommand extends $Command<UpdateAssumeRolePolicyCommandInput, UpdateAssumeRolePolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateAssumeRolePolicyCommandInput;
    constructor(input: UpdateAssumeRolePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAssumeRolePolicyCommandInput, UpdateAssumeRolePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
