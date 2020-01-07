import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { AssociateServiceQuotaTemplateRequest, AssociateServiceQuotaTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateServiceQuotaTemplateCommandInput = AssociateServiceQuotaTemplateRequest;
export declare type AssociateServiceQuotaTemplateCommandOutput = AssociateServiceQuotaTemplateResponse & __MetadataBearer;
export declare class AssociateServiceQuotaTemplateCommand extends $Command<AssociateServiceQuotaTemplateCommandInput, AssociateServiceQuotaTemplateCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: AssociateServiceQuotaTemplateCommandInput;
    constructor(input: AssociateServiceQuotaTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateServiceQuotaTemplateCommandInput, AssociateServiceQuotaTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
