import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteDeviceRequest, DeleteDeviceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDeviceCommandInput = DeleteDeviceRequest;
export declare type DeleteDeviceCommandOutput = DeleteDeviceResponse & __MetadataBearer;
export declare class DeleteDeviceCommand extends $Command<DeleteDeviceCommandInput, DeleteDeviceCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DeleteDeviceCommandInput;
    constructor(input: DeleteDeviceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDeviceCommandInput, DeleteDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
