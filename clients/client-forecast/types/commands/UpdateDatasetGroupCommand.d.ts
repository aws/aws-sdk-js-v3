import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { UpdateDatasetGroupRequest, UpdateDatasetGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDatasetGroupCommandInput = UpdateDatasetGroupRequest;
export declare type UpdateDatasetGroupCommandOutput = UpdateDatasetGroupResponse & __MetadataBearer;
export declare class UpdateDatasetGroupCommand extends $Command<UpdateDatasetGroupCommandInput, UpdateDatasetGroupCommandOutput, forecastClientResolvedConfig> {
    readonly input: UpdateDatasetGroupCommandInput;
    constructor(input: UpdateDatasetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDatasetGroupCommandInput, UpdateDatasetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
