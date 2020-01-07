import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { ListConfigurationSetsRequest, ListConfigurationSetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListConfigurationSetsCommandInput = ListConfigurationSetsRequest;
export declare type ListConfigurationSetsCommandOutput = ListConfigurationSetsResponse & __MetadataBearer;
export declare class ListConfigurationSetsCommand extends $Command<ListConfigurationSetsCommandInput, ListConfigurationSetsCommandOutput, SESClientResolvedConfig> {
    readonly input: ListConfigurationSetsCommandInput;
    constructor(input: ListConfigurationSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConfigurationSetsCommandInput, ListConfigurationSetsCommandOutput>;
    private serialize;
    private deserialize;
}
