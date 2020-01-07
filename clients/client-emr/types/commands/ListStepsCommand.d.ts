import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListStepsInput, ListStepsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListStepsCommandInput = ListStepsInput;
export declare type ListStepsCommandOutput = ListStepsOutput & __MetadataBearer;
export declare class ListStepsCommand extends $Command<ListStepsCommandInput, ListStepsCommandOutput, EMRClientResolvedConfig> {
    readonly input: ListStepsCommandInput;
    constructor(input: ListStepsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStepsCommandInput, ListStepsCommandOutput>;
    private serialize;
    private deserialize;
}
