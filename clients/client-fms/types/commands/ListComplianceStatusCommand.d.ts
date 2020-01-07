import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { ListComplianceStatusRequest, ListComplianceStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListComplianceStatusCommandInput = ListComplianceStatusRequest;
export declare type ListComplianceStatusCommandOutput = ListComplianceStatusResponse & __MetadataBearer;
export declare class ListComplianceStatusCommand extends $Command<ListComplianceStatusCommandInput, ListComplianceStatusCommandOutput, FMSClientResolvedConfig> {
    readonly input: ListComplianceStatusCommandInput;
    constructor(input: ListComplianceStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListComplianceStatusCommandInput, ListComplianceStatusCommandOutput>;
    private serialize;
    private deserialize;
}
