import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetOrganizationConfigRuleDetailedStatusRequest, GetOrganizationConfigRuleDetailedStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetOrganizationConfigRuleDetailedStatusCommandInput = GetOrganizationConfigRuleDetailedStatusRequest;
export declare type GetOrganizationConfigRuleDetailedStatusCommandOutput = GetOrganizationConfigRuleDetailedStatusResponse & __MetadataBearer;
export declare class GetOrganizationConfigRuleDetailedStatusCommand extends $Command<GetOrganizationConfigRuleDetailedStatusCommandInput, GetOrganizationConfigRuleDetailedStatusCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetOrganizationConfigRuleDetailedStatusCommandInput;
    constructor(input: GetOrganizationConfigRuleDetailedStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOrganizationConfigRuleDetailedStatusCommandInput, GetOrganizationConfigRuleDetailedStatusCommandOutput>;
    private serialize;
    private deserialize;
}
