import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetNamespaceDeletionStatusRequest, GetNamespaceDeletionStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetNamespaceDeletionStatusCommandInput = GetNamespaceDeletionStatusRequest;
export declare type GetNamespaceDeletionStatusCommandOutput = GetNamespaceDeletionStatusResponse & __MetadataBearer;
export declare class GetNamespaceDeletionStatusCommand extends $Command<GetNamespaceDeletionStatusCommandInput, GetNamespaceDeletionStatusCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: GetNamespaceDeletionStatusCommandInput;
    constructor(input: GetNamespaceDeletionStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetNamespaceDeletionStatusCommandInput, GetNamespaceDeletionStatusCommandOutput>;
    private serialize;
    private deserialize;
}
