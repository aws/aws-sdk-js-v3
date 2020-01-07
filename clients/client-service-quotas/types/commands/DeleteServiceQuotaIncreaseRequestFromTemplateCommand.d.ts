import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { DeleteServiceQuotaIncreaseRequestFromTemplateRequest, DeleteServiceQuotaIncreaseRequestFromTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput = DeleteServiceQuotaIncreaseRequestFromTemplateRequest;
export declare type DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput = DeleteServiceQuotaIncreaseRequestFromTemplateResponse & __MetadataBearer;
export declare class DeleteServiceQuotaIncreaseRequestFromTemplateCommand extends $Command<DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput, DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput;
    constructor(input: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput, DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
