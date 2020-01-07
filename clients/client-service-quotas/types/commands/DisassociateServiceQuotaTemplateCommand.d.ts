import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { DisassociateServiceQuotaTemplateRequest, DisassociateServiceQuotaTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateServiceQuotaTemplateCommandInput = DisassociateServiceQuotaTemplateRequest;
export declare type DisassociateServiceQuotaTemplateCommandOutput = DisassociateServiceQuotaTemplateResponse & __MetadataBearer;
export declare class DisassociateServiceQuotaTemplateCommand extends $Command<DisassociateServiceQuotaTemplateCommandInput, DisassociateServiceQuotaTemplateCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: DisassociateServiceQuotaTemplateCommandInput;
    constructor(input: DisassociateServiceQuotaTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateServiceQuotaTemplateCommandInput, DisassociateServiceQuotaTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
