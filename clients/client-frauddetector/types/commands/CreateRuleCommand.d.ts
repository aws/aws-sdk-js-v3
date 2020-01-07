import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateRuleRequest, CreateRuleResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRuleCommandInput = CreateRuleRequest;
export declare type CreateRuleCommandOutput = CreateRuleResult & __MetadataBearer;
export declare class CreateRuleCommand extends $Command<CreateRuleCommandInput, CreateRuleCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: CreateRuleCommandInput;
    constructor(input: CreateRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRuleCommandInput, CreateRuleCommandOutput>;
    private serialize;
    private deserialize;
}
