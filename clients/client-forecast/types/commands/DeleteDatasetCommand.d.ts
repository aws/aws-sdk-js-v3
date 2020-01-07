import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { DeleteDatasetRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDatasetCommandInput = DeleteDatasetRequest;
export declare type DeleteDatasetCommandOutput = __MetadataBearer;
export declare class DeleteDatasetCommand extends $Command<DeleteDatasetCommandInput, DeleteDatasetCommandOutput, forecastClientResolvedConfig> {
    readonly input: DeleteDatasetCommandInput;
    constructor(input: DeleteDatasetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDatasetCommandInput, DeleteDatasetCommandOutput>;
    private serialize;
    private deserialize;
}
