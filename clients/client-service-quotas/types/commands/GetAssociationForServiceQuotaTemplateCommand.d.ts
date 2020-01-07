import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { GetAssociationForServiceQuotaTemplateRequest, GetAssociationForServiceQuotaTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAssociationForServiceQuotaTemplateCommandInput = GetAssociationForServiceQuotaTemplateRequest;
export declare type GetAssociationForServiceQuotaTemplateCommandOutput = GetAssociationForServiceQuotaTemplateResponse & __MetadataBearer;
export declare class GetAssociationForServiceQuotaTemplateCommand extends $Command<GetAssociationForServiceQuotaTemplateCommandInput, GetAssociationForServiceQuotaTemplateCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: GetAssociationForServiceQuotaTemplateCommandInput;
    constructor(input: GetAssociationForServiceQuotaTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAssociationForServiceQuotaTemplateCommandInput, GetAssociationForServiceQuotaTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
