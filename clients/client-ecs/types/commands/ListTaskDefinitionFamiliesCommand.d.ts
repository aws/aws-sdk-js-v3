import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListTaskDefinitionFamiliesRequest, ListTaskDefinitionFamiliesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTaskDefinitionFamiliesCommandInput = ListTaskDefinitionFamiliesRequest;
export declare type ListTaskDefinitionFamiliesCommandOutput = ListTaskDefinitionFamiliesResponse & __MetadataBearer;
export declare class ListTaskDefinitionFamiliesCommand extends $Command<ListTaskDefinitionFamiliesCommandInput, ListTaskDefinitionFamiliesCommandOutput, ECSClientResolvedConfig> {
    readonly input: ListTaskDefinitionFamiliesCommandInput;
    constructor(input: ListTaskDefinitionFamiliesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTaskDefinitionFamiliesCommandInput, ListTaskDefinitionFamiliesCommandOutput>;
    private serialize;
    private deserialize;
}
