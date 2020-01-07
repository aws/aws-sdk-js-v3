import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { SetDefaultPolicyVersionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetDefaultPolicyVersionCommandInput = SetDefaultPolicyVersionRequest;
export declare type SetDefaultPolicyVersionCommandOutput = __MetadataBearer;
export declare class SetDefaultPolicyVersionCommand extends $Command<SetDefaultPolicyVersionCommandInput, SetDefaultPolicyVersionCommandOutput, IAMClientResolvedConfig> {
    readonly input: SetDefaultPolicyVersionCommandInput;
    constructor(input: SetDefaultPolicyVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetDefaultPolicyVersionCommandInput, SetDefaultPolicyVersionCommandOutput>;
    private serialize;
    private deserialize;
}
