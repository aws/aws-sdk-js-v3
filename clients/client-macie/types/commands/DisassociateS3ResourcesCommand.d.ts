import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { DisassociateS3ResourcesRequest, DisassociateS3ResourcesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateS3ResourcesCommandInput = DisassociateS3ResourcesRequest;
export declare type DisassociateS3ResourcesCommandOutput = DisassociateS3ResourcesResult & __MetadataBearer;
export declare class DisassociateS3ResourcesCommand extends $Command<DisassociateS3ResourcesCommandInput, DisassociateS3ResourcesCommandOutput, MacieClientResolvedConfig> {
    readonly input: DisassociateS3ResourcesCommandInput;
    constructor(input: DisassociateS3ResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MacieClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateS3ResourcesCommandInput, DisassociateS3ResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
