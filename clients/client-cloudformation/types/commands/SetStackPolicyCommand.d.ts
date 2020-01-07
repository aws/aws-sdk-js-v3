import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { SetStackPolicyInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetStackPolicyCommandInput = SetStackPolicyInput;
export declare type SetStackPolicyCommandOutput = __MetadataBearer;
export declare class SetStackPolicyCommand extends $Command<SetStackPolicyCommandInput, SetStackPolicyCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: SetStackPolicyCommandInput;
    constructor(input: SetStackPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetStackPolicyCommandInput, SetStackPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
