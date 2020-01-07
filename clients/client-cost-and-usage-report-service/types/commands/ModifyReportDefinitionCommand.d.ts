import { CostandUsageReportServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostandUsageReportServiceClient";
import { ModifyReportDefinitionRequest, ModifyReportDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyReportDefinitionCommandInput = ModifyReportDefinitionRequest;
export declare type ModifyReportDefinitionCommandOutput = ModifyReportDefinitionResponse & __MetadataBearer;
export declare class ModifyReportDefinitionCommand extends $Command<ModifyReportDefinitionCommandInput, ModifyReportDefinitionCommandOutput, CostandUsageReportServiceClientResolvedConfig> {
    readonly input: ModifyReportDefinitionCommandInput;
    constructor(input: ModifyReportDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostandUsageReportServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyReportDefinitionCommandInput, ModifyReportDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
