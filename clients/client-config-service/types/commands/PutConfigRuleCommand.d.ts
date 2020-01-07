import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutConfigRuleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutConfigRuleCommandInput = PutConfigRuleRequest;
export declare type PutConfigRuleCommandOutput = __MetadataBearer;
export declare class PutConfigRuleCommand extends $Command<PutConfigRuleCommandInput, PutConfigRuleCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutConfigRuleCommandInput;
    constructor(input: PutConfigRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutConfigRuleCommandInput, PutConfigRuleCommandOutput>;
    private serialize;
    private deserialize;
}
