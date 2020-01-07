import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateDeviceRequest, UpdateDeviceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDeviceCommandInput = UpdateDeviceRequest;
export declare type UpdateDeviceCommandOutput = UpdateDeviceResponse & __MetadataBearer;
export declare class UpdateDeviceCommand extends $Command<UpdateDeviceCommandInput, UpdateDeviceCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: UpdateDeviceCommandInput;
    constructor(input: UpdateDeviceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDeviceCommandInput, UpdateDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
