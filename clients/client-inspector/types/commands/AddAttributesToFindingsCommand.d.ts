import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { AddAttributesToFindingsRequest, AddAttributesToFindingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddAttributesToFindingsCommandInput = AddAttributesToFindingsRequest;
export declare type AddAttributesToFindingsCommandOutput = AddAttributesToFindingsResponse & __MetadataBearer;
export declare class AddAttributesToFindingsCommand extends $Command<AddAttributesToFindingsCommandInput, AddAttributesToFindingsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: AddAttributesToFindingsCommandInput;
    constructor(input: AddAttributesToFindingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddAttributesToFindingsCommandInput, AddAttributesToFindingsCommandOutput>;
    private serialize;
    private deserialize;
}
