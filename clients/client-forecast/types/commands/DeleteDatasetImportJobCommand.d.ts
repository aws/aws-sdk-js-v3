import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { DeleteDatasetImportJobRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDatasetImportJobCommandInput = DeleteDatasetImportJobRequest;
export declare type DeleteDatasetImportJobCommandOutput = __MetadataBearer;
export declare class DeleteDatasetImportJobCommand extends $Command<DeleteDatasetImportJobCommandInput, DeleteDatasetImportJobCommandOutput, forecastClientResolvedConfig> {
    readonly input: DeleteDatasetImportJobCommandInput;
    constructor(input: DeleteDatasetImportJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDatasetImportJobCommandInput, DeleteDatasetImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
