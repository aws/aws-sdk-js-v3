import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListInstanceFleetsInput, ListInstanceFleetsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListInstanceFleetsCommandInput = ListInstanceFleetsInput;
export declare type ListInstanceFleetsCommandOutput = ListInstanceFleetsOutput & __MetadataBearer;
export declare class ListInstanceFleetsCommand extends $Command<ListInstanceFleetsCommandInput, ListInstanceFleetsCommandOutput, EMRClientResolvedConfig> {
    readonly input: ListInstanceFleetsCommandInput;
    constructor(input: ListInstanceFleetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInstanceFleetsCommandInput, ListInstanceFleetsCommandOutput>;
    private serialize;
    private deserialize;
}
