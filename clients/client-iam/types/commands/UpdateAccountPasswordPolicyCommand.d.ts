import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateAccountPasswordPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAccountPasswordPolicyCommandInput = UpdateAccountPasswordPolicyRequest;
export declare type UpdateAccountPasswordPolicyCommandOutput = __MetadataBearer;
export declare class UpdateAccountPasswordPolicyCommand extends $Command<UpdateAccountPasswordPolicyCommandInput, UpdateAccountPasswordPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateAccountPasswordPolicyCommandInput;
    constructor(input: UpdateAccountPasswordPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAccountPasswordPolicyCommandInput, UpdateAccountPasswordPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
