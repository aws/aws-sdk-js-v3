import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteDeviceUsageDataRequest, DeleteDeviceUsageDataResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDeviceUsageDataCommandInput = DeleteDeviceUsageDataRequest;
export declare type DeleteDeviceUsageDataCommandOutput = DeleteDeviceUsageDataResponse & __MetadataBearer;
export declare class DeleteDeviceUsageDataCommand extends $Command<DeleteDeviceUsageDataCommandInput, DeleteDeviceUsageDataCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DeleteDeviceUsageDataCommandInput;
    constructor(input: DeleteDeviceUsageDataCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDeviceUsageDataCommandInput, DeleteDeviceUsageDataCommandOutput>;
    private serialize;
    private deserialize;
}
