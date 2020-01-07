import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { ListFlowExecutionMessagesRequest, ListFlowExecutionMessagesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListFlowExecutionMessagesCommandInput = ListFlowExecutionMessagesRequest;
export declare type ListFlowExecutionMessagesCommandOutput = ListFlowExecutionMessagesResponse & __MetadataBearer;
export declare class ListFlowExecutionMessagesCommand extends $Command<ListFlowExecutionMessagesCommandInput, ListFlowExecutionMessagesCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: ListFlowExecutionMessagesCommandInput;
    constructor(input: ListFlowExecutionMessagesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFlowExecutionMessagesCommandInput, ListFlowExecutionMessagesCommandOutput>;
    private serialize;
    private deserialize;
}
