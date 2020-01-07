import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteOrganizationConfigRuleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteOrganizationConfigRuleCommandInput = DeleteOrganizationConfigRuleRequest;
export declare type DeleteOrganizationConfigRuleCommandOutput = __MetadataBearer;
export declare class DeleteOrganizationConfigRuleCommand extends $Command<DeleteOrganizationConfigRuleCommandInput, DeleteOrganizationConfigRuleCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteOrganizationConfigRuleCommandInput;
    constructor(input: DeleteOrganizationConfigRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOrganizationConfigRuleCommandInput, DeleteOrganizationConfigRuleCommandOutput>;
    private serialize;
    private deserialize;
}
