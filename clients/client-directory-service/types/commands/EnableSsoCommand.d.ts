import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { EnableSsoRequest, EnableSsoResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableSsoCommandInput = EnableSsoRequest;
export declare type EnableSsoCommandOutput = EnableSsoResult & __MetadataBearer;
export declare class EnableSsoCommand extends $Command<EnableSsoCommandInput, EnableSsoCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: EnableSsoCommandInput;
    constructor(input: EnableSsoCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableSsoCommandInput, EnableSsoCommandOutput>;
    private serialize;
    private deserialize;
}
