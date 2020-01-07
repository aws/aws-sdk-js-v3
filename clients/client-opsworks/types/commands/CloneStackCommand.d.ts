import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { CloneStackRequest, CloneStackResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CloneStackCommandInput = CloneStackRequest;
export declare type CloneStackCommandOutput = CloneStackResult & __MetadataBearer;
export declare class CloneStackCommand extends $Command<CloneStackCommandInput, CloneStackCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: CloneStackCommandInput;
    constructor(input: CloneStackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CloneStackCommandInput, CloneStackCommandOutput>;
    private serialize;
    private deserialize;
}
