import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListAttributesRequest, ListAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAttributesCommandInput = ListAttributesRequest;
export declare type ListAttributesCommandOutput = ListAttributesResponse & __MetadataBearer;
export declare class ListAttributesCommand extends $Command<ListAttributesCommandInput, ListAttributesCommandOutput, ECSClientResolvedConfig> {
    readonly input: ListAttributesCommandInput;
    constructor(input: ListAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAttributesCommandInput, ListAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
