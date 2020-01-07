import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutOrganizationConfigRuleRequest, PutOrganizationConfigRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutOrganizationConfigRuleCommandInput = PutOrganizationConfigRuleRequest;
export declare type PutOrganizationConfigRuleCommandOutput = PutOrganizationConfigRuleResponse & __MetadataBearer;
export declare class PutOrganizationConfigRuleCommand extends $Command<PutOrganizationConfigRuleCommandInput, PutOrganizationConfigRuleCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutOrganizationConfigRuleCommandInput;
    constructor(input: PutOrganizationConfigRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutOrganizationConfigRuleCommandInput, PutOrganizationConfigRuleCommandOutput>;
    private serialize;
    private deserialize;
}
