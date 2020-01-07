import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetOutcomesRequest, GetOutcomesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetOutcomesCommandInput = GetOutcomesRequest;
export declare type GetOutcomesCommandOutput = GetOutcomesResult & __MetadataBearer;
export declare class GetOutcomesCommand extends $Command<GetOutcomesCommandInput, GetOutcomesCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetOutcomesCommandInput;
    constructor(input: GetOutcomesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOutcomesCommandInput, GetOutcomesCommandOutput>;
    private serialize;
    private deserialize;
}
