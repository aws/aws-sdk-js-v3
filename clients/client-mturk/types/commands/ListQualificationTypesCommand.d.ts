import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListQualificationTypesRequest, ListQualificationTypesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListQualificationTypesCommandInput = ListQualificationTypesRequest;
export declare type ListQualificationTypesCommandOutput = ListQualificationTypesResponse & __MetadataBearer;
export declare class ListQualificationTypesCommand extends $Command<ListQualificationTypesCommandInput, ListQualificationTypesCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListQualificationTypesCommandInput;
    constructor(input: ListQualificationTypesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListQualificationTypesCommandInput, ListQualificationTypesCommandOutput>;
    private serialize;
    private deserialize;
}
