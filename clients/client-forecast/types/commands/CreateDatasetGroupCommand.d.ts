import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { CreateDatasetGroupRequest, CreateDatasetGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDatasetGroupCommandInput = CreateDatasetGroupRequest;
export declare type CreateDatasetGroupCommandOutput = CreateDatasetGroupResponse & __MetadataBearer;
export declare class CreateDatasetGroupCommand extends $Command<CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput, forecastClientResolvedConfig> {
    readonly input: CreateDatasetGroupCommandInput;
    constructor(input: CreateDatasetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
