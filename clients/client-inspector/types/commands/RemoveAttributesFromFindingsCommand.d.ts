import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { RemoveAttributesFromFindingsRequest, RemoveAttributesFromFindingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveAttributesFromFindingsCommandInput = RemoveAttributesFromFindingsRequest;
export declare type RemoveAttributesFromFindingsCommandOutput = RemoveAttributesFromFindingsResponse & __MetadataBearer;
export declare class RemoveAttributesFromFindingsCommand extends $Command<RemoveAttributesFromFindingsCommandInput, RemoveAttributesFromFindingsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: RemoveAttributesFromFindingsCommandInput;
    constructor(input: RemoveAttributesFromFindingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveAttributesFromFindingsCommandInput, RemoveAttributesFromFindingsCommandOutput>;
    private serialize;
    private deserialize;
}
