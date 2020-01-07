import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DisableSsoRequest, DisableSsoResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableSsoCommandInput = DisableSsoRequest;
export declare type DisableSsoCommandOutput = DisableSsoResult & __MetadataBearer;
export declare class DisableSsoCommand extends $Command<DisableSsoCommandInput, DisableSsoCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DisableSsoCommandInput;
    constructor(input: DisableSsoCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableSsoCommandInput, DisableSsoCommandOutput>;
    private serialize;
    private deserialize;
}
