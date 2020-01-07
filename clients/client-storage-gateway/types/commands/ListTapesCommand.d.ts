import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListTapesInput, ListTapesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTapesCommandInput = ListTapesInput;
export declare type ListTapesCommandOutput = ListTapesOutput & __MetadataBearer;
export declare class ListTapesCommand extends $Command<ListTapesCommandInput, ListTapesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: ListTapesCommandInput;
    constructor(input: ListTapesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTapesCommandInput, ListTapesCommandOutput>;
    private serialize;
    private deserialize;
}
