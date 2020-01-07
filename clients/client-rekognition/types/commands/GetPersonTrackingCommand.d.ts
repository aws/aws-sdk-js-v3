import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { GetPersonTrackingRequest, GetPersonTrackingResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPersonTrackingCommandInput = GetPersonTrackingRequest;
export declare type GetPersonTrackingCommandOutput = GetPersonTrackingResponse & __MetadataBearer;
export declare class GetPersonTrackingCommand extends $Command<GetPersonTrackingCommandInput, GetPersonTrackingCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: GetPersonTrackingCommandInput;
    constructor(input: GetPersonTrackingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPersonTrackingCommandInput, GetPersonTrackingCommandOutput>;
    private serialize;
    private deserialize;
}
