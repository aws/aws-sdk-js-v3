import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { DeleteDatasetGroupRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDatasetGroupCommandInput = DeleteDatasetGroupRequest;
export declare type DeleteDatasetGroupCommandOutput = __MetadataBearer;
export declare class DeleteDatasetGroupCommand extends $Command<DeleteDatasetGroupCommandInput, DeleteDatasetGroupCommandOutput, forecastClientResolvedConfig> {
    readonly input: DeleteDatasetGroupCommandInput;
    constructor(input: DeleteDatasetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDatasetGroupCommandInput, DeleteDatasetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
