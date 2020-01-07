import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { EnableRadiusRequest, EnableRadiusResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableRadiusCommandInput = EnableRadiusRequest;
export declare type EnableRadiusCommandOutput = EnableRadiusResult & __MetadataBearer;
export declare class EnableRadiusCommand extends $Command<EnableRadiusCommandInput, EnableRadiusCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: EnableRadiusCommandInput;
    constructor(input: EnableRadiusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableRadiusCommandInput, EnableRadiusCommandOutput>;
    private serialize;
    private deserialize;
}
