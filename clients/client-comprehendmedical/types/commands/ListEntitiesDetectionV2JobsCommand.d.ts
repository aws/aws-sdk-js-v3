import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { ListEntitiesDetectionV2JobsRequest, ListEntitiesDetectionV2JobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListEntitiesDetectionV2JobsCommandInput = ListEntitiesDetectionV2JobsRequest;
export declare type ListEntitiesDetectionV2JobsCommandOutput = ListEntitiesDetectionV2JobsResponse & __MetadataBearer;
export declare class ListEntitiesDetectionV2JobsCommand extends $Command<ListEntitiesDetectionV2JobsCommandInput, ListEntitiesDetectionV2JobsCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: ListEntitiesDetectionV2JobsCommandInput;
    constructor(input: ListEntitiesDetectionV2JobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEntitiesDetectionV2JobsCommandInput, ListEntitiesDetectionV2JobsCommandOutput>;
    private serialize;
    private deserialize;
}
